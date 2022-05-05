import { override } from 'flarum/common/extend';
import IndexPage from 'flarum/components/IndexPage';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import LogInModal from 'flarum/components/LogInModal';

import SourceChoiceModal from './components/SourceChoiceModal';

export default function () {
  override(IndexPage.prototype, 'newDiscussionAction', function(original) {
    return new Promise((resolve, reject) => {
      if (app.session.user) {
        app.modal.show(SourceChoiceModal, {
          onsubmit: sourceChoice => {
            if(sourceChoice === 1) {
              app.composer.load(DiscussionComposer, { user: app.session.user, choice: sourceChoice });
              app.composer.show();
  
              return resolve(app.composer);
            }
            if(sourceChoice === 2) {
              app.composer.load(DiscussionComposer, { user: app.session.user, choice: sourceChoice });
              app.composer.show();
  
              return resolve(app.composer);
            }
            if(sourceChoice === 3) {
              app.composer.load(DiscussionComposer, { user: app.session.user, choice: sourceChoice });
              app.composer.show();
  
              return resolve(app.composer);
            }
          }
        });
      } else {
        app.modal.show(LogInModal);

        return reject();
      }
    });
  });
};