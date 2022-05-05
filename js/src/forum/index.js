import modifyNewDiscussionAction from './modifyNewDiscussionAction';
import modifyDiscussionComposer from './modifyDiscussionComposer';
import modifyTextEditor from './modifyTextEditor';

app.initializers.add('aradeid/discussion-to-source', () => {
  modifyNewDiscussionAction();
  modifyDiscussionComposer();
  modifyTextEditor();
});