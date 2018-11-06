import jsonp from '@/public/js/jsonp'
import {options, commonParams} from './config'

export function getPlayer(id) {
    let url = 'https://api.bilibili.com/playurl'
    //  获取视频
    const data = Object.assign({}, commonParams, {
        callback: 'callbackfunction',
        aid: id,
        page: 1,
        platform: 'html5',
        quality: 1,
        vtype: 'mp4'
    })

    return jsonp(url, data, options)
}

export function getCommint(id) {
    let url = 'https://api.bilibili.com/x/v2/reply'
    //  弹幕??
    const data = Object.assign({}, commonParams, {
        type: 1,
        sort: 2,
        oid: id,
        pn: 1,
        nohot: 1
    })

    return jsonp(url, data, options)
}
