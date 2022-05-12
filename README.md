# DiscussionToSource

![License](https://img.shields.io/badge/license-MIT-blue.svg)

A [Flarum](http://flarum.org) extension. Replaces discussions with a link or sources in discussion list.

### Installation

Not present on [Bazaar](https://discuss.flarum.org/d/5151-flagrow-bazaar-the-extension-marketplace) or [Packagist](https://packagist.org/). Must be installed manually with composer:

```sh
composer require aradeid/discussion-to-source *@dev
```
The extension will work immediately with no additional setup. Flarum/tags must be enabled for full functionality.

### Updating

```sh
composer update aradeid/discussion-to-source
```

### Compatibility
Developed and tested for Flarum version 0.1.0-beta.8

### Features
Adds 2 new fields to the discussion composer: a link and a thumbnail. If no thumbnail is given, the extension will attempt to extract an image from post contents. 2 new context menu buttons are added to edit these fields for existing discussions.

The imagies will represent discussions in discussion list as cards. 

On click, instead of the discussion, the user will be sent to the provided link. The discussion page can still be accessed via a new button in the context menu.

A custom google search is added to overwrite tag paths. If a tag is found with the path "studenti", "parinti" or "elevi", it will be overwritten with a custom page filled with google search results. These options are hard coded and cannot be adjusted in the settings.

### Portlet Integration
Installed on [Edu](https://edu.emoldova.org/) (currently inactive).

### Links

- [Github Repository](https://github.com/Aradeid/discussion-to-source)
