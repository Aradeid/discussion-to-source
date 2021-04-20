import ExtensionPage from 'flarum/common/components/ExtensionPage';
import app from 'flarum/app';
import Switch from 'flarum/components/Switch';
import Button from 'flarum/components/Button';

export default class DiscussionToSourceSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.externalOptions = Object.entries(app.forum.attribute('aradeid-source.external'));
    this.complexOptions = Object.entries(app.forum.attribute('aradeid-source.complex'));
    this.modified = false;
    this.loading = false;
  }

  content() {
    // console.log(app.forum.data.attributes);
    // console.log(this.complexOptions);
    return (
      m('.ExtensionPage-settings', [
        m('.container', [
          m('Form', {
            onsubmit: this.onsubmit.bind(this),
          }, [
            // Basic Source
            m('.Form-group', [
              m('label', app.translator.trans('aradeid-d2s.admin.settings.basic_source_title')),
              m('.helpText', app.translator.trans('aradeid-d2s.admin.settings.basic_source_help_text')),
              Switch.component({
                state: true,
              },
                m('li', app.translator.trans('aradeid-d2s.admin.settings.option_title'))
              ),
              Switch.component({
                state: true,
              },
                m('li', app.translator.trans('aradeid-d2s.admin.settings.option_description'))
              ),
              Switch.component({
                state: true,
              },
                m('li', app.translator.trans('aradeid-d2s.admin.settings.option_tags'))
              ),
            ]),
            // External Source
            m('.Form-group', [
              m('label', app.translator.trans('aradeid-d2s.admin.settings.external_source_title')),
              m('.helpText', app.translator.trans('aradeid-d2s.admin.settings.external_source_help_text')),
              Switch.component({
                state: true,
              },
                m('li', app.translator.trans('aradeid-d2s.admin.settings.option_title'))
              ),
              Switch.component({
                state: true,
              },
                m('li', app.translator.trans('aradeid-d2s.admin.settings.option_description'))
              ),
              Switch.component({
                state: true,
              },
                m('li', app.translator.trans('aradeid-d2s.admin.settings.option_tags'))
              ),
              this.externalOptions.map((option) => {
                return (
                  Switch.component({
                    state: option[1],
                    onchange: (state) => {
                      (state) ?
                        option[1] = true :
                        option[1] = false;
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
              Switch.component({
                state: true,
              },
                m('li', app.translator.trans('aradeid-d2s.admin.settings.option_title'))
              ),
              Switch.component({
                state: true,
              },
                m('li', app.translator.trans('aradeid-d2s.admin.settings.option_description'))
              ),
              Switch.component({
                state: true,
              },
                m('li', app.translator.trans('aradeid-d2s.admin.settings.option_tags'))
              ),
              this.complexOptions.map((option) => {
                return (
                  Switch.component({
                    state: option[1],
                    onchange: (state) => {
                      (state) ?
                        option[1] = true :
                        option[1] = false;
                      this.modified = true;
                    }
                  },
                  m('li', app.translator.trans(`aradeid-d2s.admin.settings.option_${option[0]}`))
                  )
                );
              })
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
          ])
        ])
      ])
    );
  }

  onsubmit(e) {
    this.loading = true;

    // Save external options
    this.externalOptions.map((option) => {
      eval(`app.forum.attribute('aradeid-source.external')${option[0]} = ${option[1]}`);
    });

    // Save complex options
    this.complexOptions.map((option) => {
      eval(`app.forum.attribute('aradeid-source.complex').${option[0]} = ${option[1]}`);
    });

    this.loading = false;
    this.modified = false;
  }
}