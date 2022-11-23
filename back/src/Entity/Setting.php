<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\SettingRepository;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: SettingRepository::class)]
#[ApiResource(
    mercure: ['topics' => ['/setting']],
    normalizationContext: ['groups' => ['read:setting']],
    operations: [
        new GetCollection(),
        new Get(),
        new Post(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
        ),
        new Delete(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
        ),
        new Put(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
        ),
    ]
)]
class Setting
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:setting'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank()]
    #[Groups(['read:setting'])]
    private ?string $copyright = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCopyright(): ?string
    {
        return $this->copyright;
    }

    public function setCopyright(string $copyright): self
    {
        $this->copyright = $copyright;

        return $this;
    }
}
