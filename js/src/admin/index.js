import DiscussionToSourceSettingsPage from './components/DiscussionToSourceSettingsPage'
import app from 'flarum/app';

app.initializers.add('aradeid/discussion-to-source', () => {
  // app.extensionData.for('aradeid-discussion-to-source').registerPage(DiscussionToSourceSettingsPage);
  app.extensionData.for('aradeid-discussion-to-source').registerSetting({
    setting: 'aradeid-source.external.images',
    type: 'boolean',
    label: 'Images',
  });
  // console.log(app);
});