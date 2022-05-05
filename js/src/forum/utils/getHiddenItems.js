import Button from "flarum/components/Button";
import ItemList from 'flarum/common/utils/ItemList';

export default function getHiddenItems(options) {
  const items = new ItemList();

  // Not Polls, checklist, narator, image_preview

  (options.images) ?
    items.add(
      'images',
      Button.component({
        title: 'Images',
        data_toggle: 'tooltip',
        icon: 'fas fa-image',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';
  
  (options.categories) ?
    items.add(
      'categories',
      Button.component({
        title: 'Categories',
        data_toggle: 'tooltip',
        icon: 'fas fa-tag',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';
    
  (options.slideshow) ?
    items.add(
      'slideshow',
      Button.component({
        title: 'Slideshow',
        data_toggle: 'tooltip',
        icon: 'fas fa-film',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  (options.source_URL) ?
    items.add(
      'source_URL',
      Button.component({
        title: 'Source URL',
        data_toggle: 'tooltip',
        icon: 'fas fa-link',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  (options.images_URL) ?
    items.add(
      'images_URL',
      Button.component({
        title: 'Images URL',
        data_toggle: 'tooltip',
        icon: 'far fa-image',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  (options.videos_URL) ?
    items.add(
      'videos_URL',
      Button.component({
        title: 'Videos URL',
        data_toggle: 'tooltip',
        icon: 'fas fa-video',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  (options.transliterator) ?
    items.add(
      'transliterator',
      Button.component({
        title: 'Transliterator',
        data_toggle: 'tooltip',
        icon: 'fas fa-language',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  (options.digital_packages) ?
    items.add(
      'digital_packages',
      Button.component({
        title: 'Digital Packages',
        data_toggle: 'tooltip',
        icon: 'fas fa-box-open',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  (options.text_file_rendering) ?
    items.add(
      'text_file_rendering',
      Button.component({
        title: 'Text File Rendering',
        data_toggle: 'tooltip',
        icon: 'fas fa-file-alt',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  (options.metadata_generator) ?
    items.add(
      'metadata_generator',
      Button.component({
        title: 'Metadata Generator',
        data_toggle: 'tooltip',
        icon: 'fas fa-list-ul',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  (options.collage_maker) ?
    items.add(
      'collage_maker',
      Button.component({
        title: 'Collage Maker',
        data_toggle: 'tooltip',
        icon: 'fas fa-cut',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  (options.forms) ?
    items.add(
      'forms',
      Button.component({
        title: 'Forms',
        data_toggle: 'tooltip',
        icon: 'fab fa-wpforms',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  (options.cv) ?
    items.add(
      'cv',
      Button.component({
        title: 'Curriculum Vitae',
        data_toggle: 'tooltip',
        icon: 'fab fa-wpforms',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  (options.stickers) ?
    items.add(
      'stickers',
      Button.component({
        title: 'Stickers',
        data_toggle: 'tooltip',
        icon: 'fas fa-icons',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  (options.labels) ?
    items.add(
      'labels',
      Button.component({
        title: 'Labels',
        data_toggle: 'tooltip',
        icon: 'fas fa-paint-brush',
        className: 'Button Button--icon',
        oncreate: () => {
          $('[data_toggle="tooltip"]').tooltip();
        },
      })
    ) : '';

  return items;
}