<?php

namespace App\Tests\Traits;

use App\Entity\Setting;

/**
 * trait for setting
 */
trait SettingTrait
{
    /**
     * create a instance of setting
     *
     * @return Setting
     */
    public function createEntity(): Setting
    {
        return (new Setting())->setCopyright('je suis le copyright');
    }

    /**
     * create a array of setting
     *
     * @param Setting $entity
     * @return array
     */
    public function createArrayEntity(Setting $entity): array
    {
        return [
            'copyright' => $entity->getCopyright(),
        ];
    }
}
