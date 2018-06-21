/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


$(function() {

    describe('RSS Feeds', function() {

       //This test checks if allFeeds variable has been properly created
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //This test checks if all items in the feed have valid URL
         it('has all feeds with a defined and not empty URL', function() {
           allFeeds.forEach(function(thisFeed) {
             expect(thisFeed.url).toBeDefined();
             expect(thisFeed.url).not.toBe('');
           });
         });


        //This test checks if all items in feed have a valid name
         it('has all feeds with a defined and not empty names', function() {
           allFeeds.forEach(function(thisFeed) {
             expect(thisFeed.name).toBeDefined();
             expect(thisFeed.name).not.toBe('');
           });
         });
    });

      describe('The menu', function() {
        //This test checks if menu is hidden by default
         it('is hidden by default', function() {
           expect(document.body.className).toBe('menu-hidden')
         });

         //This test checks if the menu changes visibility when clicked
          it('changes visibility when clicked', function() {
            document.querySelector('.menu-icon-link').click();
            expect(document.body.className).not.toBe('menu-hidden');
            document.querySelector('.menu-icon-link').click();
            expect(document.body.className).toBe('menu-hidden');
          });
      });

      describe('Initial Entries', function() {
        //This test checks if loadFeed function works correctly
         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });

         it('has at least a single entry after LoadFeed function is called',
          function(done) {
            expect(document.querySelector('.feed').firstElementChild).not.toBe(null);
            done();
         });

     });

      describe('New Feed Selection', function() {
        //This test checks if the feed actualy changes
        // when function loadfeed is called
         let beforeFeed,
             afterFeed

         beforeEach(function(done) {
           loadFeed(0, function() {
             beforeFeed = document.querySelector('.feed').innerHTML;
             loadFeed(1, function() {
               afterFeed = document.querySelector('.feed').innerHTML;
               done();
             });
           });
         });
        it('The feed actually changes on load', function(done) {
              expect(beforeFeed).not.toBe(afterFeed);
              done();
        });
      });

}());
