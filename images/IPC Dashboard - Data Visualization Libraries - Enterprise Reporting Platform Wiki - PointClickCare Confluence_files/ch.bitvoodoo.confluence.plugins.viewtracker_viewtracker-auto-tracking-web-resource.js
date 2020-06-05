WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'ch.bitvoodoo.confluence.plugins.viewtracker:viewtracker-auto-tracking-web-resource', location = 'ch/bitvoodoo/confluence/plugins/viewtracker/scripts/viewtracker-auto-tracking.js' */
require(["ajs","jquery","bitvoodoo/viewtracker/namespaces"],function(b,c,a){var d=a.Configuration.desktopTrackingEnabled;b.toInit(function(i){var f=b.Meta.get("page-id");if(!f){return}var g=i("#reporting-single-content-link-wrapper");var h=g.find("#reporting-single-content-link span");h.html("");g.spin();function e(l){var k=l.count;if(k){h.html(k.toLocaleString()+" "+"view(s)")}g.spinStop()}if(d){var j={pageId:f};Bitvoodoo.Viewtracker.VisitsService.trackVisit(Bitvoodoo.Viewtracker.VisitsService.getVisitsTotal,e,j)}})});
}catch(e){WRMCB(e)};