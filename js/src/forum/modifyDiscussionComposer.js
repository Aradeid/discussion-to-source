import { extend, override } from 'flarum/common/extend';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import TextEditor from 'flarum/components/TextEditor';
import ConfirmDocumentUnload from 'flarum/components/ConfirmDocumentUnload';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import avatar from 'flarum/helpers/avatar';
import listItems from 'flarum/helpers/listItems';

export default function () {
  override(DiscussionComposer.prototype, 'view', function(original) {
    // console.log(app);
    // return original();
    return (
      // With this component throws error and I commented this
      // Inexplicated but forum works
      // <ConfirmDocumentUnload when={this.hasChanges.bind(this)}>
        <div className={'ComposerBody ' + (this.attrs.className || '')}>
          {avatar(this.attrs.user, { className: 'ComposerBody-avatar' })}
          <div className="ComposerBody-content">
            <ul className="ComposerBody-header">{listItems(this.headerItems().toArray())}</ul>
            <div className="ComposerBody-editor">
              {TextEditor.component({
                submitLabel: this.attrs.submitLabel,
                placeholder: this.attrs.placeholder,
                disabled: this.loading || this.attrs.disabled,
                composer: this.composer,
                preview: this.jumpToPreview && this.jumpToPreview.bind(this),
                onchange: this.composer.fields.content,
                onsubmit: this.onsubmit.bind(this),
                value: this.composer.fields.content(),
                choice: this.attrs.choice,
              })}
            </div>
          </div>
          {LoadingIndicator.component({ className: 'ComposerBody-loading' + (this.loading ? ' active' : '') })}
        </div>
      // </ConfirmDocumentUnload>
    );
  });
};