// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require moment
//= require fullcalendar
//= require underscore
//= require gmaps/google
//= require activestorage
//= require turbolinks
//= require_tree .


$(function(){
	    $(document).on('turbolinks:load', function () {
	        if ($('#calendar').length) {
	            function eventCalendar() {
					return $('#calendar').fullCalendar({
					});
			    };

			    function clearCalendar() {
			        $('#calendar').html('');
			    };

			    $(document).on('turbolinks:load', function () {
				    eventCalendar();
				});

				$(document).on('turbolinks:before-cache', clearCalendar);

				$('#calendar').fullCalendar({
				    events: '/tasks.json',
					//カレンダー上部を年月で表示させる
	                titleFormat: 'YYYY年 M月',
	                //曜日を日本語表示
	                dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
	                //ボタンのレイアウト
	                header: {
	                    left: '',
	                    center: 'title',
	                    right: 'today prev,next'
	                },
	                eventDataTransform: function (event){
						console.log(event);
						if (event.end){
							var timestamp = new Date(Date.parse(event.end)).getTime();
							event.end = moment(new Date(timestamp + 60*60*24*1000)).format('YYYY-MM-DD');
						}
						return event;
					},
	                //終了時刻がないイベントの表示間隔
	                defaultTimedEventDuration: '03:00:00',
	                buttonText: {
	                    prev: '前',
	                    next: '次',
	                    prevYear: '前年',
	                    nextYear: '翌年',
	                    today: '今日',
	                    month: '月',
	                    week: '週',
	                    day: '日'
	                },
	                // Drag & Drop & Resize
	                editable: false,
	                //イベントの時間表示を２４時間に
	                timeFormat: "HH:mm",
	                //イベントの色を変える
	                eventColor: 'orange',
	                //イベントの文字色を変える
	                eventTextColor: '#000000',
	                eventRender: function(event, element) {
	                    element.css("font-size", "0.8em");
	                    element.css("padding", "5px");
	                }
			});
		}
    });
});
