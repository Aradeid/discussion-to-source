export default class LinkUtils {

    static AddProtocolToLink(link) {console.log(link);
        if (link && link[0] != '/' && link.split('/')[0] != 'http' && link.split('/')[0] != 'https') {
            return 'http://' + link;
        }
        return link;
    }
}