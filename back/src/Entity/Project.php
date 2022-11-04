<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Post;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProjectRepository;
use ApiPlatform\Metadata\GetCollection;
use App\ApiResource\Project\ProjectMediaDeleteApiResource;
use App\ApiResource\Project\ProjectMediaUploadApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProjectRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:project', 'read:project:media']],
    operations: [
        // only media
        new ProjectMediaUploadApiResource(),
        new ProjectMediaDeleteApiResource(),

        // only profile data
        new Get(),
        new GetCollection(),
        new Post(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
            validationContext: ['groups' => ['create:project']],
        ),
        new Delete(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
        ),
        new Put(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
            validationContext: ['groups' => ['put:project']],
        ),
    ]
)]
class Project
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:project'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:project', 'create:project', 'put:project'])]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['read:project', 'create:project', 'put:project'])]
    private ?string $presentation = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['read:project', 'create:project', 'put:project'])]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:project', 'create:project', 'put:project'])]
    private ?string $techno = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:project', 'create:project', 'put:project'])]
    private ?string $link = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[Groups(['read:project'])]
    private ?Media $media = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getPresentation(): ?string
    {
        return $this->presentation;
    }

    public function setPresentation(string $presentation): self
    {
        $this->presentation = $presentation;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getTechno(): ?string
    {
        return $this->techno;
    }

    public function setTechno(string $techno): self
    {
        $this->techno = $techno;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(?string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getMedia(): ?Media
    {
        return $this->media;
    }

    public function setMedia(?Media $media): self
    {
        $this->media = $media;

        return $this;
    }
}
