import Modal from "flarum/components/Modal";

export default class SourceChoiceModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);
  }

  className() {
    return "";
  }

  title() {
    return app.translator.trans('aradeid-d2s.forum.source_modal_title');
  }

  content() {
    return [
      m('.Modal-body',
        m('.Form.Form--centered',
          m('.Form-group',
            m('.choiceBox', {
              onclick: this.onsubmit.bind(this, 1),
            },
              m('span', app.translator.trans('aradeid-d2s.forum.source_modal_basic')),
              m('p', app.translator.trans('aradeid-d2s.forum.source_modal_basic_help_text'))
            )
          ),
          m('.Form-group',
            m('.choiceBox', {
              onclick: this.onsubmit.bind(this, 2),
            },
              m('span', app.translator.trans('aradeid-d2s.forum.source_modal_external')),
              m('p', app.translator.trans('aradeid-d2s.forum.source_modal_external_help_text'))
            )
          ),
          m('.Form-group',
            m('.choiceBox', {
              onclick: this.onsubmit.bind(this, 3),
            },
              m('span', app.translator.trans('aradeid-d2s.forum.source_modal_complex')),
              m('p', app.translator.trans('aradeid-d2s.forum.source_modal_complex_help_text'))
            )
          ),
        )
      )
    ];
  }

  onsubmit(value, e) {
    app.modal.close();
    this.attrs.onsubmit(value);
  }
}