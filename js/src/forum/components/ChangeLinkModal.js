import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import Stream from 'flarum/utils/Stream';
import LinkUtils from '../utils/LinkUtils'

export default class ChangeLinkModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.discussion = this.attrs.discussion;
    this.currentLink = this.attrs.discussion.data.attributes.link;
    this.newLink = Stream(this.currentLink);
  }

  className() {
    return 'ChangeLinkModal Modal--small';
  }

  title() {
    return app.translator.trans('aradeid-d2s.forum.change_link_discussion.title');
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group">
            <input className="FormControl" bidi={this.newLink} type="text" />
          </div>
          <div className="Form-group">
            {Button.component(
              {
                className: 'Button Button--primary Button--block',
                type: 'submit',
                loading: this.loading,
              },
              app.translator.trans('aradeid-d2s.forum.change_link_discussion.submit_button')
            )}
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();

    this.loading = true;

    var link = this.newLink;
    var currentLink = this.currentLink;

    if (link && link !== currentLink) {
      link = LinkUtils.AddProtocolToLink(link);
      return this.discussion
        .save({ link })
        .then(() => {
          if (app.viewingDiscussion(this.discussion)) {
            app.current.get('stream').update();
          }
          m.redraw();
          this.hide();
        })
        .catch(() => {
          this.loading = false;
          m.redraw();
        });
    } else {
      this.hide();
    }
  }
}
