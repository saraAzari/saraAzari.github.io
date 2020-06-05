WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'ch.bitvoodoo.confluence.plugins.viewtracker:viewtracker-report-timeline-web-resource', location = 'ch/bitvoodoo/confluence/plugins/viewtracker/scripts/reporting/widgets/webpanels/global/timeline-init.js' */
define("bitvoodoo/viewtracker/reporting/widgets/webpanels/global/timeline-init",["jquery","bitvoodoo/viewtracker/reporting/widgets/webpanels/global/widget-initbase","bitvoodoo/viewtracker/reporting/widgets/timeline"],function(b,c,d){var a=function(){this._init()};a.prototype=b.extend(a.prototype,c.prototype,{init:function(f){if(!f){return}if(f.report==="global"||f.report==="space"){var e=b("#timeline-widget");if(e&&e.length){this.timeline=new d({element:e,spaceKeys:f.spaceKey});this.timeline.show()}}else{if(f.report==="content"){var e=$("#reporting-inline-dialog #timeline-widget");if(e&&e.length){this.timeline=new d({element:e,contentId:f.contentId,chartOptions:{chart:{height:400,events:{selection:function(g){if(g.xAxis){this.zoom()}else{g.preventDefault();this.xAxis[0].setExtremes(null,null);this.resetZoomButton.hide()}}}}}});this.timeline.show()}}}}});return a});require(["bitvoodoo/viewtracker/reporting/widgets/webpanels/global/timeline-init"],function(a){new a()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'ch.bitvoodoo.confluence.plugins.viewtracker:viewtracker-report-timeline-web-resource', location = 'ch/bitvoodoo/confluence/plugins/viewtracker/scripts/reporting/widgets/webpanels/global/widget-init-base.js' */
define("bitvoodoo/viewtracker/reporting/widgets/webpanels/global/widget-initbase",["jquery","bitvoodoo/viewtracker/reporting/events/queue","bitvoodoo/viewtracker/reporting/events/strings"],function(b,d,a){var c=function(){};c.prototype._init=function(){this.queue=new d();var e=[a.WIDGET_INIT];var f=this;this.queue.subscribe(e,function(g){if(g&&g.report){f.init(g)}})};return c});
}catch(e){WRMCB(e)};