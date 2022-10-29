<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\ApiResource\User\MeApiResource;
use App\ApiResource\User\MeDeleteApiResource;
use App\ApiResource\User\MeUpdateApiResource;
use App\ApiResource\User\MeUpdateEmailApiResource;
use App\ApiResource\User\UpdateApiResource;
use App\ApiResource\User\RegisterApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[ApiResource(
    normalizationContext: [
        'groups' => [
            'read:user',
            'read:user:media',
        ]
    ],
    operations: [
        // custom operations
        new MeApiResource(),
        new MeUpdateApiResource(),
        new MeUpdateEmailApiResource(),
        new MeDeleteApiResource(),
        new RegisterApiResource(),
        new UpdateApiResource(),

        // basic operations
        new Get(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
            openapiContext: [
                'summary' => 'Get one user, must be authenticated with role root for access'
            ]
        ),
        new GetCollection(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
            openapiContext: [
                'summary' => 'Get all users, must be authenticated with role root for access'
            ]
        ),
        new Delete(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
            openapiContext: [
                'summary' => 'Delete user, must be authenticated with role root for access'
            ]
        )
    ]
)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(nullable: false)]
    #[Groups(['read:user'])]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true, nullable: false)]
    #[Groups(['read:user', 'write:user:login', 'write:user:put', 'write:me:put:email'])]
    #[Assert\Email]
    private ?string $email = null;

    #[ORM\Column(nullable: false)]
    #[Groups(['read:user', 'write:user:put', 'write:me:put'])]
    private array $roles = ["ROLE_AUTH"];

    #[ORM\Column(length: 255, nullable: false)]
    #[Groups(['read:user'])]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: false)]
    #[Groups(['read:user', 'write:user:put', 'write:me:put'])]
    private ?string $firstName = null;

    #[ORM\Column(length: 255, nullable: false)]
    #[Groups(['read:user', 'write:user:put', 'write:me:put'])]
    private ?string $lastName = null;

    /**
     * @var string The hashed password
     */
    #[ORM\Column(nullable: false)]
    #[Groups(['write:user:login'])]
    private ?string $password = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: false)]
    #[Groups(['read:user'])]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: false)]
    #[Groups(['read:user'])]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[Groups(['read:user', 'write:user:put', 'write:me:put'])]
    private ?Media $avatar = null;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->name = $this->firstName . ' ' . $this->lastName;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): self
    {
        $this->id = $id;
        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getAvatar(): ?Media
    {
        return $this->avatar;
    }

    public function setAvatar(?Media $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }
}
