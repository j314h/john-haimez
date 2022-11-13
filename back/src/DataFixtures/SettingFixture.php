<?php

namespace App\DataFixtures;

use App\Entity\Setting;
use Doctrine\Persistence\ObjectManager;

class SettingFixture
{
    public function __construct(
        private GenerateString $generator
    ) {
    }

    /**
     * create a one setting
     *
     * @param ObjectManager $manager
     * @return void
     */
    public function generateSetting(
        ObjectManager $manager
    ) {
        // create setting
        $setting = new Setting();
        $setting->setCopyright($this->generator->generateParagraph(8));

        // save setting
        $manager->persist($setting);
        $manager->flush();
    }
}
