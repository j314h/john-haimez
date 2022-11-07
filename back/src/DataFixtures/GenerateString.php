<?php

namespace App\DataFixtures;

class GenerateString
{
    public $str = 'azertyuiopqsdfghjklmwxcvbn';

    /**
     * create un sample word faker
     *
     * @param integer $length
     * @return string
     */
    public function generateWord(int $length = 5)
    {
        $word = '';

        for ($i = 0; $i < $length; $i++) {
            $arrString = str_split($this->str);
            $word .= $this->str[rand(0, count($arrString) - 1)];
        }

        return $word;
    }

    /**
     * generate a sample word with length is random
     *
     * @return string
     */
    public function generateWordRandomLength()
    {
        $length = rand(0, 13);
        $word = '';

        for ($i = 0; $i < $length; $i++) {
            $arrString = str_split($this->str);
            $word .= $this->str[rand(0, count($arrString) - 1)];
        }

        return $word;
    }

    /**
     * create a sample paragraph with number of word's paragraph
     *
     * @param integer $numberOfWord
     * @return string
     */
    public function generateParagraph(int $numberOfWord)
    {
        $paragraphe = '';

        for ($i = 0; $i < $numberOfWord; $i++) {
            $word = $this->generateWordRandomLength();
            $paragraphe .= $word . ' ';
        }

        return $paragraphe;
    }

    /**
     * create a sample email faker
     *
     * @param integer $length
     * @return string
     */
    public function generateEmail(int $length = 15)
    {
        $postEmail = $this->generateWord($length);

        return $postEmail . '@' . 'gmail.com';
    }
}
