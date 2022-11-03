<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221103095655 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE profile DROP CONSTRAINT FK_8157AA0FEA9FDD75');
        $this->addSql('ALTER TABLE profile ADD CONSTRAINT FK_8157AA0FEA9FDD75 FOREIGN KEY (media_id) REFERENCES media (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE profile DROP CONSTRAINT fk_8157aa0fea9fdd75');
        $this->addSql('ALTER TABLE profile ADD CONSTRAINT fk_8157aa0fea9fdd75 FOREIGN KEY (media_id) REFERENCES media (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }
}
