import DiscussionToSourceSettingsPage from './components/DiscussionToSourceSettingsPage'

app.initializers.add('aradeid/discussion-to-source', () => {
  app.extensionData.for('aradeid-discussion-to-source').registerPage(DiscussionToSourceSettingsPage);
});