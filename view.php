<?php defined('C5_EXECUTE') or die('Access Denied.'); ?>

<div class="counter-wrap counter-<?php echo $bID?>">
    <div class="row">
        <div class="col-sm-3">
            <div class="days-cnt"></div>
            <label>DAYS</label>
        </div>
        <div class="col-sm-3">
            <div class="hours-cnt"></div>
            <label>HOURS</label>
        </div>
        <div class="col-sm-3">
            <div class="minutes-cnt"></div>
            <label>MINUTES</label>
        </div>
        <div class="col-sm-3">
            <div class="seconds-cnt"></div>
            <label>SECONDS</label>
        </div>
    </div>
</div>

<script>

    const counterID = '.counter-<?php echo $bID?>',
        oneDay = 24 * 60 * 60 * 1000,
        sel_date_time = '<?php echo $dateValue; ?>',
        currentDate = new Date(),
        date = new Date(sel_date_time);

    $(function(){
        counter.initCounter();
    });
    
</script>