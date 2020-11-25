import $ from "jquery";


$.prototype.chain = function<This extends JQuery<HTMLElement>>(
        this: This,
        handler :   null |
                    ((this: This) => (This | JQuery<HTMLElement> | HTMLElement | null | void))
    ) : This | JQuery<HTMLElement> {

    if (handler) {
        let result = handler.call(this);
        if (result) {
            if (result === this) return this;
            return $(result);
        }
    }
    return this;
}


declare global {
    interface JQuery<TElement = HTMLElement> {
        /**
         * chain operation for manipulating the jQuery collection before chaining to another jQuery operations
         * usage:
         * let divOnly = true;
         * $(".something")
         * .chain(function(){
         *    return divOnly ? this.filter("div") : this; 
         * })
         */
        chain<This extends JQuery<HTMLElement>>(
                this: This,
                handler :   null |
                            ((this: This) => (This | JQuery<HTMLElement> | HTMLElement | null | void))
            ) : This | JQuery<HTMLElement>
    }
}
