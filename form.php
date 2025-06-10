<?php defined('C5_EXECUTE') or die('Access Denied.');

$datetime = Core::make('helper/form/date_time');

?>
<fieldset>
    <legend>
        <?php echo t('Date Start') ?>
    </legend>
<?php
echo $datetime->datetime('dateValue', $dateValue);
?>
</fieldset>