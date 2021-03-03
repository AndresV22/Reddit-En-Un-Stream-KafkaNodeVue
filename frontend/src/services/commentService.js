import { gatewayClient } from "@/services/apiClient/gatewayClient.js";

export default {
  getAllComments() {
    return gatewayClient.get("reddit-comments/");
  },
  getCommentById(id) {
    return gatewayClient.get("reddit-comment/" + id);
  },
  getCommentByName(name) {
    return gatewayClient.get("reddit-comment-by-name/" + name);
  },
  postComment(comment) {
    return gatewayClient.post("reddit-comment/", comment);
  },
  editComment(id, comment) {
    return gatewayClient.put("reddit-comment/" + id, comment);
  },
  deleteComment(id) {
    return gatewayClient.delete("reddit-comment/" + id);
  }
};
