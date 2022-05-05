import { extend, override } from 'flarum/common/extend';
import TextEditor from 'flarum/components/TextEditor';
import Button from "flarum/components/Button";
import ItemList from 'flarum/common/utils/ItemList';

import HiddenItemsDropdown from './components/HiddenItemsDropdown';
import getHiddenItems from './utils/getHiddenItems';

export default function () {
  extend(TextEditor.prototype, 'controlItems', function(items) {
    switch(this.attrs.choice) {
      case 2:
        if(!this.hiddenItems().isEmpty()) {
          items.add(
            'source-items',
            HiddenItemsDropdown.component({
              icon: 'fas fa-boxes',
              tooltip: app.translator.trans('aradeid-d2s.forum.composer.source_items'),
              buttons: this.hiddenItems().toArray(),
            })
          );
        }
        break;
      case 3:
        if(!this.hiddenItems().isEmpty()) {
          items.add(
            'source-items',
            HiddenItemsDropdown.component({
              icon: 'fas fa-boxes',
              tooltip: app.translator.trans('aradeid-d2s.forum.composer.source_items'),
              buttons: this.hiddenItems().toArray(),
            })
          );
        }
        break;
      default:
        break;
    }
    // console.log(this.attrs.choice);
  });

  TextEditor.prototype.hiddenItems = function() {
    let items = new ItemList();

    switch(this.attrs.choice) {
      case 2:
        let tempExternalSource = Object.entries(JSON.parse(app.forum.attribute('externalSource')));
        const externalSource = Object.fromEntries(tempExternalSource);

        items = getHiddenItems(externalSource);
        break;
      case 3:
        let tempComplexSource = Object.entries(JSON.parse(app.forum.attribute('complexSource')));
        const complexSource = Object.fromEntries(tempComplexSource);

        items = getHiddenItems(complexSource);
        break;
      default:
        break;
    }
    return items;
  }
};