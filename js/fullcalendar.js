/*   $(document).ready(function() {
    // Setup FullCalendar
// Setup FullCalendar
(function() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var tooltip = $('<div/>').qtip({
        id: 'fullcalendar',
        prerender: true,
        content: {
            text: ' ',
            title: {
                button: true
            }
        },
        position: {
            my: 'bottom center',
            at: 'top center',
            target: 'mouse',
            viewport: $('#fullcalendar'),
            adjust: {
                mouse: false,
                scroll: false
            }
        },
        show: false,
        hide: false,
        style: 'qtip-light'
    }).qtip('api');

    $('#fullcalendar').fullCalendar({
        editable: true,
        height: 600,
        theme: true,
        header: {
            left: 'title',
            center: '',
            right: 'today prev,next'
        },
        eventMouseover : function(data, event, view) {
            var content = '<h3>'+data.title+'</h3>' + 
                '<p><b>Start:</b> '+data.start+'<br />' + 
                (data.end && '<p><b>End:</b> '+data.end+'</p>' || '');

            tooltip.set({
                'content.text': content
            })
            .reposition(event).show(event);
        },
        dayClick: function() { tooltip.hide() },
        eventResizeStart: function() { tooltip.hide() },
        eventDragStart: function() { tooltip.hide() },
        viewDisplay: function() { tooltip.hide() },
        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d-5),
                end: new Date(y, m, d-2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d+4, 16, 0),
                allDay: false
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d+1, 19, 0),
                end: new Date(y, m, d+1, 22, 30),
                allDay: false
            }
        ]
    });
}());
    });*/


    $(function() {

  $('#fullcalendar').fullCalendar({
    defaultView: 'month',
    defaultDate: '2018-08-12',

    eventRender: function(eventObj, $el) {
      $el.popover({
        html: true,
        title: eventObj.description,
        trigger: 'hover',
        placement: 'top',
        container: 'body',
        delay: {show: 50, hide: 4000}
      });
    },

    events: [
      {
        title: '10:00 PM All Day Event', 
        description: '<div class="d-flex" style="padding: 5px 0 ;"><div class="option-icon m-r-20"><a href="#"><i class="material-icons">settings</i></a></div><div class="option-icon"><a href="#"><i class="material-icons">visibility</i></a></div></div>',
        start: '2018-08-01',
        constraint: 'availableForMeeting', // defined below
        color: '#19C6B7',
      },

      {
        title: 'All Day Event', 
        description: '<div class="d-flex" style="padding: 5px 0 ;"><div class="option-icon m-r-20"><a href="#"><i class="material-icons">settings</i></a></div><div class="option-icon"><a href="#"><i class="material-icons">visibility</i></a></div></div>',
        start: '2018-08-10',
        color: '#19C6B7',
        rendering: 'background'
      },
      {
        title: 'All Day Event', 
        description: '<div class="d-flex" style="padding: 5px 0 ;"><div class="option-icon m-r-20"><a href="#"><i class="material-icons">settings</i></a></div><div class="option-icon"><a href="#"><i class="material-icons">visibility</i></a></div></div>',
        start: '2018-08-15',
        color: '#F56A80',
        constraint: 'availableForMeeting'
      },
      {
        title: 'All Day Event', 
        description: '<div class="d-flex" style="padding: 5px 0 ;"><div class="option-icon m-r-20"><a href="#"><i class="material-icons">settings</i></a></div><div class="option-icon"><a href="#"><i class="material-icons">visibility</i></a></div></div>',
        start: '2018-08-02',
        color: ' #1EB2E8',
        constraint: 'availableForMeeting'
      },
      {
        title: 'All Day Event', 
        description: '<div class="d-flex" style="padding: 5px 0 ;"><div class="option-icon m-r-20"><a href="#"><i class="material-icons">settings</i></a></div><div class="option-icon"><a href="#"><i class="material-icons">visibility</i></a></div></div>',
        start: '2018-08-02',
        color: ' #1EB2E8',
        constraint: 'availableForMeeting'
      },
      {
        title: 'All Day Event', 
        description: '<div class="d-flex" style="padding: 5px 0 ;"><div class="option-icon m-r-20"><a href="#"><i class="material-icons">settings</i></a></div><div class="option-icon"><a href="#"><i class="material-icons">visibility</i></a></div></div>',
        start: '2018-08-02',
        color: ' #1EB2E8',
        constraint: 'availableForMeeting'
      },
     
      
      /*      {
        title: 'Long Event',
        description: 'description for Long Event',
        start: '2018-08-07',
        end: '2018-08-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        description: 'description for Repeating Event',
        start: '2018-08-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        description: 'description for Repeating Event',
        start: '2018-08-16T16:00:00'
      },
      {
        title: 'Conference',
        description: 'description for Conference',
        start: '2018-08-11',
        end: '2018-08-13'
      },
      {
        title: 'Meeting',
        description: 'description for Meeting',
        start: '2018-08-12T10:30:00',
        end: '2018-08-12T12:30:00'
      },
      {
        title: 'Lunch',
        description: 'description for Lunch',
        start: '2018-08-12T12:00:00'
      },
      {
        title: 'Meeting',
        description: 'description for Meeting',
        start: '2018-08-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        description: 'description for Birthday Party',
        start: '2018-08-13T07:00:00'
      },
      {
        title: 'Click for Google',
        description: 'description for Click for Google',
        url: 'http://google.com/',
        start: '2018-08-28'
      }*/
    ]
  });

});