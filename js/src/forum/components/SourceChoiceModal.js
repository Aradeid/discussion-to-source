import Modal from "flarum/components/Modal";
import Button from "flarum/components/Button";

export default class SourceChoiceModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);
  }

  className() {
    return "";
  }

  title() {
    // to do -> add app.translator.trans()
    return 'Source Choice';
  }

  content() {
    // to do -> slyle div with buttons
    return (
      m('.Modal-body',
        m('.Form.Form--centered',
          m('.Form-group',
            Button.component({
              className: "Button Button--primary",
              type: "button",
              onclick: this.onsubmit.bind(this, 1),
            },
            'Choice - 1'
            ),
            Button.component({
              className: "Button Button--primary",
              type: "button",
              onclick: this.onsubmit.bind(this, 1),
            },
            'Choice - 1'
            ),
            Button.component({
              className: "Button Button--primary",
              type: "button",
              onclick: this.onsubmit.bind(this, 1),
            },
            'Choice - 1'
            ),
            Button.component({
              className: "Button Button--primary",
              type: "button",
              onclick: this.onsubmit.bind(this, 1),
            },
            'Choice - 1'
            ),
            Button.component({
              className: "Button Button--primary",
              type: "button",
              onclick: this.onsubmit.bind(this, 1),
            },
            'Choice - 1'
            ),
          )
        )
      )
    );
  }

  onsubmit(value, e) {
    this.attrs.onsubmit(value);
    app.modal.close();
  }
}