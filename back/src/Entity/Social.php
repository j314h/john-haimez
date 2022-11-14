<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\SocialRepository;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: SocialRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:social']],
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
class Social
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:social'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:social'])]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:social'])]
    private ?string $link = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:social'])]
    private ?string $icon = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }
}
