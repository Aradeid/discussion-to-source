import { extend, override } from 'flarum/common/extend';
import IndexPage from 'flarum/components/IndexPage';

import SourceChoiceModal from './components/SourceChoiceModal';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import LogInModal from 'flarum/components/LogInModal';

app.initializers.add('aradeid/discussion-to-source', () => {
  override(IndexPage.prototype, 'newDiscussionAction', function(original) {
    return new Promise((resolve, reject) => {
      if (app.session.user) {
        app.modal.show(SourceChoiceModal, {
          onsubmit: choice => {
            console.log(choice);
            app.composer.load(DiscussionComposer, { user: app.session.user });
            app.composer.show();

            return resolve(app.composer);
          }
        });
      } else {
        app.modal.show(LogInModal);

        return reject();
      }
    });
  });
});