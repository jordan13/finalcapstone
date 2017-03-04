<script type="text/javascript">
  var dp = new DayPilot.Calendar("dp");
  dp.viewType = "Week";
  dp.init();
</script>

function loadEvents() {
  $.post("backend_events.php", // use "backend/events" for ASP.NET MVC
  {
    start: dp.visibleStart().toString(),
    end: dp.visibleEnd().toString()
  },
  function(data) {
    dp.events.list = data;
    dp.update();
  });
}
