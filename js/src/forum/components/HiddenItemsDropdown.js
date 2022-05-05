import Dropdown from 'flarum/common/components/Dropdown';
import icon from 'flarum/common/helpers/icon';

export default class HiddenItemsDropdown extends Dropdown {
  oninit(vnode) {
    super.oninit(vnode);
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    this.$('[data-toggle="tooltip"]').tooltip();
    this.$('[data-toggle="tooltip"]').parent().addClass("Button");
  }

  getButtonContent(children) {
    return (
      <span data-toggle="tooltip" title={this.attrs.tooltip}>
        {icon(this.attrs.icon)}
      </span>
    );
  }

  getMenu(items) {
    return <ul className={'Dropdown-menu dropdown-menu SourceOption'}>{this.attrs.buttons}</ul>;
  }
}