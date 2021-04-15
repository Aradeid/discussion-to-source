import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import Stream from 'flarum/utils/Stream';
import LinkUtils from '../utils/LinkUtils';

export default class ChangeThumbnailModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.discussion = this.attrs.discussion;
    this.currentThumbnail = this.attrs.discussion.data.attributes.thumbnail;
    this.newThumbnail = Stream(this.currentThumbnail);
  }

  className() {
    return 'ChangeThumbnailModal Modal--small';
  }

  title() {
    return app.translator.trans('aradeid-d2s.forum.change_thumbnail_discussion.title');
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group">
            <input className="FormControl" bidi={this.newThumbnail} type="text" />
          </div>
          <div className="Form-group">
            {Button.component(
              {
                className: 'Button Button--primary Button--block',
                type: 'submit',
                loading: this.loading,
              },
              app.translator.trans('aradeid-d2s.forum.change_thumbnail_discussion.submit_button')
            )}
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();

    this.loading = true;

    var thumbnail = this.newThumbnail();
    var currentThumbnail = this.currentThumbnail;

    if (thumbnail && thumbnail !== currentThumbnail) {
      thumbnail = LinkUtils.AddProtocolToLink(thumbnail)
      return this.discussion
        .save({ thumbnail })
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