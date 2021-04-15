import { extend } from "flarum/extend";
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import Model from "flarum/Model";
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import Stream from 'flarum/utils/Stream';
import extractText from 'flarum/utils/extractText';
import DiscussionPage from 'flarum/components/DiscussionPage';
import DiscussionControls from "flarum/utils/DiscussionControls";
import Button from 'flarum/components/Button';
import ChangeLinkModal from './components/ChangeLinkModal';
import ChangeThumbnailModal from './components/ChangeThumbnailModal';
import DiscussionsSearchSource from "flarum/components/DiscussionsSearchSource";
import DiscussionList from 'flarum/components/DiscussionList';
import TextEditor from 'flarum/components/TextEditor';
import GoogleSearchModal from './components/GoogleSearchModal';
import LinkUtils from './utils/LinkUtils';

var link;
var thumbnail;
var attrs = {};

app.initializers.add('aradeid/discussion-to-source', () => {

  DiscussionListItem.prototype.sourceThumbnail = Model.attribute("sourceThumbnail");
  extend(DiscussionListItem.prototype, 'view', function (view) {
    var discId = view.children[2].children[2].attrs.href.split('/').pop().split('-')[0];
    var discussion = app.store.getBy('discussions', 'id', discId);
    if (discussion && discussion.data) {
      var link = discussion.data.attributes.link;
      var thumbnail = discussion.data.attributes.thumbnail;
      var image = getFirstImage(discussion.firstPost());
      if (link) {
        // set image to external link
        view.children[2].children[0].attrs.href = link;
        view.children[2].children[0].attrs.target = '_blank';
        // set discussion title to external link
        view.children[2].children[2].attrs.href = link;
        view.children[2].children[2].attrs.target = '_blank';
      } else {
        // set image to discussion link; since the default destination is author's profile
        view.children[2].children[0].attrs.href = view.children[2].children[2].attrs.href;
      }

      if(thumbnail) {
        view.children[2].children[0].children.unshift(<img class='sourceThumbnail' src={thumbnail}/>);
      } else {
        view.children[2].children[0].children.unshift(<img class='sourceThumbnail' src={image}/>);
      }
    }
    
    
  });

  extend(DiscussionComposer.prototype, 'oninit', () => {
    link = Stream(attrs.link);
    thumbnail = Stream(attrs.thumbnail);
    attrs.linkPlaceholder = extractText(app.translator.trans('aradeid-d2s.forum.discussion_composer.link_placeholder'));
    attrs.thumbnailPlaceholder = extractText(app.translator.trans('aradeid-d2s.forum.discussion_composer.thumbnail_placeholder'));
  });

  extend(DiscussionComposer.prototype, 'headerItems', (items) => {
    items.add(
      'discussionLink',
      m('h3',
        m('input', {
          className: "FormControl",
          bidi: link,
          placeholder: attrs.linkPlaceholder,
          //disabled={this.loading}
          onkeydown: DiscussionComposer.prototype.onkeydown.bind(DiscussionComposer.prototype),
        })
      )
    ).add(
      'discussionThumbnail',
      m('h3',
        m('input', {
          className: "FormControl",
          bidi: thumbnail,
          placeholder: attrs.thumbnailPlaceholder,
          //disabled={this.loading}
          onkeydown: DiscussionComposer.prototype.onkeydown.bind(DiscussionComposer.prototype),
        })
      )
    );
  });

  extend(DiscussionComposer.prototype, 'data', (data) => {
    data.link = LinkUtils.AddProtocolToLink(link());
    data.thumbnail = LinkUtils.AddProtocolToLink(thumbnail());
  });

  extend(DiscussionPage.prototype, 'oninit', () => {
    //m.route.set(app.routes.index.path);
  });

  extend(DiscussionControls, 'moderationControls', (items, discussion) => {
    if (discussion.canRename()) {
      items.add(
        'changeLink',
        Button.component(
          {
            icon: 'fas fa-link',
            onclick: changeLinkAction.bind(discussion),
          },
          app.translator.trans('aradeid-d2s.forum.discussion_controls.change_link_button')
        )
      ).add(
        'changeThumbnail',
        Button.component(
          {
            icon: 'fas fa-image',
            onclick: changeThumbnailAction.bind(discussion),
          },
          app.translator.trans('aradeid-d2s.forum.discussion_controls.change_thumbnail_button')
        )
      ) 
    }
    items.add(
      'checkDiscussionDetails',
      Button.component(
        {
          icon: 'fas fa-info'
        },
        m('a', { href: app.route.discussion(discussion)}, app.translator.trans('aradeid-d2s.forum.discussion_controls.see_details_button'))
      )
    )
  });
  /*
  extend(TextEditor.prototype, 'view', (view) => {
    console.log(view.children[0].attrs = vnode => {console.log($(vnode.dom))})//.onblur = m.withAttr('value', setThumbnail);
  });*/
  
  //extend(TextEditor.prototype, 'oninput', setThumbnail);
  extend(DiscussionList.prototype, 'view', (view) => {
    var route = m.route.get().split('?')[0].split('/');
    var appPath = route.pop();
    var appName = route.pop();
    
    // check if route is a tag slug
    if (appName == 't') {
      // adds a google search component if the tag is relevant
      if (appPath == 'studenti') {
        if (!m.route.param('search')) {
          m.route.set(m.route.get(), {search: 'studenți'});
        }
        hidePlaceholder(view);
        view.children.push(GoogleSearchModal.component({key: '2568432f39b604615'}));
      }
      if (appPath == 'parinti') {
        if (!m.route.param('search')) {
          m.route.set(m.route.get(), {search: 'părinți'});
        }
        hidePlaceholder(view);
        view.children.push(GoogleSearchModal.component({key: '864d2c85b6042671d'}));
      }
      if (appPath == 'elevi') {
        if (!m.route.param('search')) {
          m.route.set(m.route.get(), {search: 'elevi'});
        }
        hidePlaceholder(view);
        view.children.push(GoogleSearchModal.component({key: '421118c66a83ddb25'}));
      }
    }
  });
});

/**
 * Change discussion link.
 *
 * @return {Promise}
 */
function changeLinkAction() {
  return app.modal.show(ChangeLinkModal, {
    currentTitle: this.title(),
    discussion: this,
  });
}

/**
 * Change discussion thumbnail.
 *
 * @return {Promise}
 */
function changeThumbnailAction() {
  return app.modal.show(ChangeThumbnailModal, {
    currentTitle: this.title(),
    discussion: this,
  });
}

function hidePlaceholder(view) {
  var counter = 0;
  var checkExist = setInterval(function() {
    if (counter >= 100) {// item never appeared after 10 seconds, therefore script should be stopped to avoid overflow
      clearInterval(checkExist);
    }
    counter++;
    if (view.children[0].dom) {
      if (view.children[0].dom.classList[0] == 'Placeholder') {
        view.children[0].dom.attributes[0].value = 'Placeholder hidden';
      }
      clearInterval(checkExist);
    }
    
  }, 100);
}

function setThumbnail(e, data) {
  var regex = /(?<=\[upl-image-preview url=)([\w\d:/\.&\?\-_\/~]*)(?=\])/g
  var images = data.match(regex);
  var input = $('.item-discussionThumbnail .FormControl');
  if (input.val() == '' && images) {
    input.val(images[0]);
  } 
}

function getFirstImage(post) {
  const regex = /<img(?!.*?class="emoji").*?src=[\'"](.*?)[\'"].*?>/;
  const defaultImg = app.forum.attribute('defaultImg');
  if (post) {
    const src = regex.exec(post.contentHtml());
    return (src) ? src[1] : defaultImg;
  } else {
    return defaultImg;
  }
}