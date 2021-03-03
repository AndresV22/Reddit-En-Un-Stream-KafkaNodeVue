import Vue from "vue";
import Vuex from "vuex";
import commentService from "@/services/commentService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedComment: "",
    comments: "",
  },
  mutations: {
    SET_COMMENTS(state, comments){
      state.comments = comments;
    },
    CREATE_COMMENT(state, comment){
      state.comments.push(comment);
    },
    SET_SELECTED_COMMENT(state, comment){
      state.selectedComment = comment;
    },
    UPDATE(state, comment) {
      let id = comment.id;
      let index = state.comments.findIndex(item => item.id === id);
      Vue.set(state.comments, index, comment);
    },
    DELETE(state, comment) {
      state.comments.splice(state.comments.indexOf(comment), 1);
    }
  },
  actions: {
    getComments({ commit }) {
      return commentService.getAllComments()
        .then(response => {
          commit("SET_COMMENTS", response.data);
          return response;
        })
        .catch(error => {
          throw error;
        });
    },
    getCommentById({ commit }, id) {
      return commentService.getCommentById(id)
        .then(response => {
          commit("SET_SELECTED_COMMENT", response.data);
          return response;
        })
        .catch(error => {
          throw error;
        });
    },
    editComment({commit}, comment){
      return commentService.editComment(comment.id, comment).then(response => {
        commit("UPDATE", response.data);
      }).catch(error => {
        throw error;
      })
    },
    createComment({ commit }, comment) {
      return commentService.postComment(comment)
        .then(response => {
          commit("CREATE_COMMENT", response.data);
        })
        .catch(error => {
          throw error;
        });
    },
  },
  modules: {}
});
