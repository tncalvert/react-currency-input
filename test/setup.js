import { JSDOM } from 'jsdom'

export default function setup(markup){

    global.document = new JSDOM(markup || '<!doctype html><html><body></body></html>').window.document;
    global.window = document.defaultView;

}



