<?php
namespace Application\Block\DateCounter;

use Concrete\Core\Block\BlockController;

class Controller extends BlockController  
{

    protected $btInterfaceWidth = 470;
    protected $btInterfaceHeight = 300;
    protected $btCacheBlockOutput = true;
    protected $btCacheBlockOutputOnPost = true;
    protected $btCacheBlockOutputForRegisteredUsers = false;
    protected $btTable = 'btDateCounter';
    protected $btDefaultSet = 'basic';

    protected $dateValue = '';

    public function getBlockTypeDescription()
    {
        return t('Custom date/time counter.');
    }

    public function getBlockTypeName()
    {
        return t('Date Counter');
    }

    public function add()
    {
        $wdt = $this->app->make('helper/form/date_time');
        $this->set('dateValue', $wdt->translate(time()));
    }

    public function edit()
    {
        $this->set('dateValue', $this->dateValue);
    }

    public function save($data)
    {
        $wdt = $this->app->make('helper/form/date_time');
        $args['dateValue'] = $wdt->translate('dateValue');
        parent::save($args);
    }

    public function view()
    {
        $this->set('dateValue', $this->dateValue);
    }
}