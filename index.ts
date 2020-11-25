export default function makePlugin($ : JQueryStatic | JQuery<any>) : JQueryStatic | null {
    if($ && (typeof $ == "function")) {
        $.prototype.chain = function(
                this: JQuery<HTMLElement>,
                handler :   null |
                            ((this: JQuery<HTMLElement>) => (JQuery<HTMLElement> | HTMLElement | null))
            ) : JQuery<HTMLElement> {

            return $(handler ? (handler!.call(this) || this) : this);
        }

        return $;
    }

    return null;
}

if (typeof jQuery == "function") makePlugin(jQuery!);



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
        chain(
                this: JQuery<HTMLElement>,
                handler :   null |
                            ((this: JQuery<HTMLElement>) => (JQuery<HTMLElement> | HTMLElement | null))
            ) : JQuery<HTMLElement>
    }
}
