import ExtensionPage from 'flarum/common/components/ExtensionPage';
import app from 'flarum/app';
import Switch from 'flarum/components/Switch';
import Button from 'flarum/components/Button';
import saveSettings from 'flarum/utils/saveSettings';

export default class DiscussionToSourceSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.externalOptions = Object.entries(JSON.parse(app.data.settings["aradeid-d2s.external_source"] || null));
    this.complexOptions = Object.entries(JSON.parse(app.data.settings["aradeid-d2s.complex_source"] || null));
   
    this.modified = false;
  }

  content() {
    return (
      m('.ExtensionPage-settings', [
        m('.container', [
          m('Form', {
            onsubmit: this.onsubmit.bind(this),
          }, [
            m('.Source-display', [
              // External Source
              m('.Form-group', [
                m('label', app.translator.trans('aradeid-d2s.admin.settings.external_source_title')),
                m('.helpText', app.translator.trans('aradeid-d2s.admin.settings.external_source_help_text')),
                this.externalOptions.map((option) => {
                  return (
                    Switch.component({
                      state: option[1] || false,
                      onchange: () => {
                        option[1] ^= true;
                        this.modified = true;
                      }
                    },
                    m('li', app.translator.trans(`aradeid-d2s.admin.settings.option_${option[0]}`))
                    )
                  );
                })
              ]),

              // Complex Source
              m('.Form-group', [
                m('label', app.translator.trans('aradeid-d2s.admin.settings.complex_source_title')),
                m('.helpText', app.translator.trans('aradeid-d2s.admin.settings.complex_source_help_text')),
                this.complexOptions.map((option) => {
                  return (
                    Switch.component({
                      state: option[1] || false,
                      onchange: () => {
                        option[1] ^= true;
                        this.modified = true;
                      }
                    },
                    m('li', app.translator.trans(`aradeid-d2s.admin.settings.option_${option[0]}`))
                    )
                  );
                })
              ]),
            ]),
            Button.component(
              {
                type: 'submit',
                className: 'Button Button--primary',
                loading: this.loading,
                disabled: !this.modified,
              },
              app.translator.trans('aradeid-d2s.admin.settings.submit_button')
            ),
          ]),
        ])
      ])
    );
  }

  onsubmit(e) {
    e.preventDefault();
    this.loading = true;

    saveSettings({
      ["aradeid-d2s.external_source"]: JSON.stringify(Object.fromEntries(this.externalOptions)),
      ["aradeid-d2s.complex_source"]: JSON.stringify(Object.fromEntries(this.complexOptions)),
    });

    this.loading = false;
    this.modified = false;
  }
}