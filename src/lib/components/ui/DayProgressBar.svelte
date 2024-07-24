<script>
  import dayjs from 'dayjs';
  import { onMount, onDestroy } from 'svelte';

  let progress = 0;
  let interval;

  function updateProgress() {
    const now = dayjs();
    const startTime = now.hour() < 13 ? now.subtract(1, 'day').hour(13).minute(0).second(0) : now.hour(13).minute(0).second(0);
    const endTime = startTime.add(11, 'hour');
    
    if (now.isAfter(endTime) || now.isBefore(startTime)) {
      progress = 100;
    } else {
      const totalMinutes = endTime.diff(startTime, 'minute');
      const elapsedMinutes = now.diff(startTime, 'minute');
      progress = (elapsedMinutes / totalMinutes) * 100;
    }
  }

  onMount(() => {
    updateProgress();
    interval = setInterval(updateProgress, 60000); // Update every minute
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="w-full h-1 bg-red-500 absolute left-0" style="top: {progress}%;" />
