import { Controller } from "@hotwired/stimulus";
import { get } from "@rails/request.js";
// Connects to data-controller="select"
export default class extends Controller {
  static targets = ["stateSelect"];
  static values = { url: String, param: String };
  connect() {
    if (this.stateSelectTarget.id === "") {
      this.stateSelectTarget.id = Math.random().toString(36);
    }
  }
  onchange(e) {
    let params = new URLSearchParams();
    params.append(this.paramValue, e.target.selectedOptions[0].value);
    params.append("target", this.stateSelectTarget.id);
    get(`${this.urlValue}?${params}`, {
      responseKind: "turbo-stream",
    });
  }
}
