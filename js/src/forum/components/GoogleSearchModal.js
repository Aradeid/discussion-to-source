import Modal from 'flarum/components/Modal';
import Component from 'flarum/Component';

export default class GoogleSearchModal extends Component {
//export default class GoogleSearchModal extends Modal {
  view() {
    this.key = this.attrs.key;
    return (
        <div className="Resource-search-results sideNavOffset">
            <script async src={"https://cse.google.com/cse.js?cx=" + this.key}></script>
            <div className="gcse-searchresults-only" defaultToImageSearch="true"></div>
        </div>
    );
  }
}
