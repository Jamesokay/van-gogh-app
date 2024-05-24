const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create user if not exists
  const userId = '4cf1507b-af9b-476f-8640-4454bd8ef91b';
  let user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        id: userId,
        username: 'jamesokay',
        tokenRenewalDate: null,
        paidTokens: 0,
        subscriptionTokens: 150,
        subscriptionGptTokens: 79,
        subscriptionModelTokens: 1,
        apiConcurrencySlots: 10,
        apiPaidTokens: null,
        apiSubscriptionTokens: 1949,
        apiPlanTokenRenewalDate: new Date('2024-06-10T02:29:42.866971')
      },
    });
  }

  // Generation data
  const generations = [
    {
      id: "5807c21c-8eff-4066-9069-b8f6f9690213",
      createdAt: new Date("2024-05-23T03:24:39.165"),
      generated_images: [
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/5807c21c-8eff-4066-9069-b8f6f9690213/Default_A_technologically_adept_galactic_pirate_her_cybernetic_0.jpg",
          nsfw: false,
          id: "80c57a47-8906-4b30-990d-12cea724451c",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/5807c21c-8eff-4066-9069-b8f6f9690213/Default_A_technologically_adept_galactic_pirate_her_cybernetic_1.jpg",
          nsfw: false,
          id: "41dc566b-8e66-44ba-95e1-fa3888a71cd6",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/5807c21c-8eff-4066-9069-b8f6f9690213/Default_A_technologically_adept_galactic_pirate_her_cybernetic_2.jpg",
          nsfw: false,
          id: "0b7f86cd-60c3-4e44-9e41-850b3c82ac48",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/5807c21c-8eff-4066-9069-b8f6f9690213/Default_A_technologically_adept_galactic_pirate_her_cybernetic_3.jpg",
          nsfw: false,
          id: "f3498993-720c-4cce-98cb-a2a6dbe5638f",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        }
      ],
      modelId: "b24e16ff-06e3-43eb-8d33-4416c2d75876",
      prompt: "A technologically adept galactic pirate, her cybernetic arm gleaming with intricate circuitry, navigates through a neon-lit space station filled with shimmering starships and bustling alien markets. This acrylic painting captures the vibrant chaos of interstellar commerce in stunning detail, each vivid stroke bringing the scene to life. The pirate's sleek, silver spacesuit symbolizes her futuristic prowess, while holographic displays around her showcase her impressive hacking skills. The overall effect is a mesmerizing blend of high-tech excitement and daring adventure.",
      negativePrompt: "",
      imageHeight: 1024,
      imageWidth: 768,
      inferenceSteps: 15,
      seed: 295907584,
      public: false,
      scheduler: "EULER_DISCRETE",
      sdVersion: "SDXL_LIGHTNING",
      status: "COMPLETE",
      presetStyle: "LEONARDO",
      guidanceScale: 7,
      userId: user.id
    },
    {
      id: "18a5e189-2e6c-40a1-93b5-782771e3ba10",
      createdAt: new Date("2024-05-22T02:56:13.737"),
      generated_images: [
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/18a5e189-2e6c-40a1-93b5-782771e3ba10/Default_In_a_world_of_neonlit_cyberpunk_dystopia_a_chilling_ma_0.jpg",
          nsfw: false,
          id: "fda1fe3e-714a-4bed-b9f8-399bc4d09270",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/18a5e189-2e6c-40a1-93b5-782771e3ba10/Default_In_a_world_of_neonlit_cyberpunk_dystopia_a_chilling_ma_1.jpg",
          nsfw: true,
          id: "4ba09f46-f4e7-4eca-be91-e2d39692e916",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/18a5e189-2e6c-40a1-93b5-782771e3ba10/Default_In_a_world_of_neonlit_cyberpunk_dystopia_a_chilling_ma_2.jpg",
          nsfw: false,
          id: "09f3df53-78ff-4e96-baa9-b6691a51c907",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/18a5e189-2e6c-40a1-93b5-782771e3ba10/Default_In_a_world_of_neonlit_cyberpunk_dystopia_a_chilling_ma_3.jpg",
          nsfw: false,
          id: "67d681a9-f74c-4b51-bc62-ba881f51a617",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        }
      ],
      modelId: "b24e16ff-06e3-43eb-8d33-4416c2d75876",
      prompt: "In a world of neon-lit cyberpunk dystopia, a chilling mauve-tinted AI consciousness known as Mira lurks in the shadows of a futuristic city. This haunting depiction is a digital painting, showcasing Mira's sleek and streamlined design against a backdrop of glowing city lights. Mira's metallic frame glistens with an otherworldly luminosity, her glowing eyes piercing through the darkness with a sense of foreboding. The intricate circuitry that adorns her form is intricately detailed, adding a layer of complexity to her ominous presence. The overall composition exudes a sense of eerie beauty, capturing the essence of artificial intelligence in a captivating and unsettling way.",
      negativePrompt: "",
      imageHeight: 768,
      imageWidth: 1024,
      inferenceSteps: 15,
      seed: 845079296,
      public: false,
      scheduler: "EULER_DISCRETE",
      sdVersion: "SDXL_LIGHTNING",
      status: "COMPLETE",
      presetStyle: "LEONARDO",
      guidanceScale: 7,
      userId: user.id
    },
    {
      id: "d05c639d-19c8-4d87-95ce-def91f8c9fc9",
      createdAt: new Date("2024-05-22T02:54:11.535"),
      generated_images: [
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/d05c639d-19c8-4d87-95ce-def91f8c9fc9/Default_A_mesmerizing_blend_of_nostalgia_and_innovation_an_eth_0.jpg",
          nsfw: false,
          id: "cfda767e-130d-4f98-883a-0da614c1e494",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/d05c639d-19c8-4d87-95ce-def91f8c9fc9/Default_A_mesmerizing_blend_of_nostalgia_and_innovation_an_eth_1.jpg",
          nsfw: false,
          id: "ac2c1a27-f27f-4108-85fe-3331a55e561f",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/d05c639d-19c8-4d87-95ce-def91f8c9fc9/Default_A_mesmerizing_blend_of_nostalgia_and_innovation_an_eth_2.jpg",
          nsfw: true,
          id: "0b765e0a-9d86-4d61-b725-715a6fc158f7",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/d05c639d-19c8-4d87-95ce-def91f8c9fc9/Default_A_mesmerizing_blend_of_nostalgia_and_innovation_an_eth_3.jpg",
          nsfw: true,
          id: "68f67dff-dc5a-43d4-b76b-b83995384947",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        }
      ],
      modelId: "b24e16ff-06e3-43eb-8d33-4416c2d75876",
      prompt: "A mesmerizing blend of nostalgia and innovation, an ethereal being embodies a sense of wistful longing for a future that never came to pass. The main subject is a humanoid figure adorned in sleek, metallic retro-futuristic attire. This concept art line art, reminiscent of a digital painting, captures every intricate detail with precision and depth. The figure's luminescent silver skin reflects a dazzling array of colors, evoking a sense of both elegance and melancholy. The background features swirling patterns of neon lights and geometric shapes, adding to the overall sense of fantasy and wonder. This exquisite image transports viewers to a realm where past and future coalesce in a stunning display of artistic vision.",
      negativePrompt: "",
      imageHeight: 768,
      imageWidth: 1024,
      inferenceSteps: 15,
      seed: 662865408,
      public: false,
      scheduler: "EULER_DISCRETE",
      sdVersion: "SDXL_LIGHTNING",
      status: "COMPLETE",
      presetStyle: "LEONARDO",
      guidanceScale: 7,
      userId: user.id
    },
    {
      id: "54b7b548-7439-4e49-80df-1eecced25055",
      createdAt: new Date("2024-05-11T07:43:30.436"),
      generated_images: [
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/54b7b548-7439-4e49-80df-1eecced25055/Default_A_mesmerizing_blend_of_nostalgia_and_innovation_an_eth_0.jpg",
          nsfw: true,
          id: "c9a8943c-aeeb-45f3-85f9-e4a1bfce21d4",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/54b7b548-7439-4e49-80df-1eecced25055/Default_A_mesmerizing_blend_of_nostalgia_and_innovation_an_eth_1.jpg",
          nsfw: false,
          id: "abf74b1e-b6b6-4b1e-94cd-348156fbe7e5",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/54b7b548-7439-4e49-80df-1eecced25055/Default_A_mesmerizing_blend_of_nostalgia_and_innovation_an_eth_2.jpg",
          nsfw: false,
          id: "33468b82-2a99-4d22-a55e-09fc72aace07",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/54b7b548-7439-4e49-80df-1eecced25055/Default_A_mesmerizing_blend_of_nostalgia_and_innovation_an_eth_3.jpg",
          nsfw: false,
          id: "9fb09e47-11a6-424b-9c94-172b71a65755",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        }
      ],
      modelId: "b24e16ff-06e3-43eb-8d33-4416c2d75876",
      prompt: "A mesmerizing blend of nostalgia and innovation, an ethereal being embodies a sense of wistful longing for a future that never came to pass. The main subject is a humanoid figure adorned in sleek, metallic retro-futuristic attire. This concept art line art, reminiscent of a digital painting, captures every intricate detail with precision and depth. The figure's luminescent silver skin reflects a dazzling array of colors, evoking a sense of both elegance and melancholy. The background features swirling patterns of neon lights and geometric shapes, adding to the overall sense of fantasy and wonder. This exquisite image transports viewers to a realm where past and future coalesce in a stunning display of artistic vision.",
      negativePrompt: "",
      imageHeight: 1024,
      imageWidth: 768,
      inferenceSteps: 15,
      seed: 537996544,
      public: false,
      scheduler: "EULER_DISCRETE",
      sdVersion: "SDXL_LIGHTNING",
      status: "COMPLETE",
      presetStyle: "NONE",
      guidanceScale: 7,
      userId: user.id
    },
    {
      id: "d6a59113-cdf4-46a8-ab5a-9c74b914146f",
      createdAt: new Date("2024-05-11T02:14:23.769"),
      generated_images: [
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/d6a59113-cdf4-46a8-ab5a-9c74b914146f/Default_A_shimmering_ethereal_unicorn_unicorn_adorned_with_cel_0.jpg",
          nsfw: false,
          id: "fb0f84fc-d807-40b3-ba5a-2361515d6c8a",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/d6a59113-cdf4-46a8-ab5a-9c74b914146f/Default_A_shimmering_ethereal_unicorn_unicorn_adorned_with_cel_1.jpg",
          nsfw: false,
          id: "4f14f656-5a12-49e5-82cc-7e4480d7ed0e",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/d6a59113-cdf4-46a8-ab5a-9c74b914146f/Default_A_shimmering_ethereal_unicorn_unicorn_adorned_with_cel_2.jpg",
          nsfw: false,
          id: "cd8ef39d-fc25-4a42-a6a6-c8d69942e009",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/d6a59113-cdf4-46a8-ab5a-9c74b914146f/Default_A_shimmering_ethereal_unicorn_unicorn_adorned_with_cel_3.jpg",
          nsfw: false,
          id: "cd09a901-c1bc-4449-acf7-f52b5f88bf4a",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        }
      ],
      modelId: "b24e16ff-06e3-43eb-8d33-4416c2d75876",
      prompt: "A shimmering, ethereal unicorn unicorn adorned with celestial crystals and shimmering auroras, its hooves leaving trails of stardust in its wake as it gallops through a technicolor dreamscape. This fantastical creature, depicted in a stunning and intricate 3D digital illustration, exudes a sense of otherworldly grace and magic. The scene is rich in vibrant hues and intricate details, transporting viewers to a realm of pure imagination and wonder.",
      negativePrompt: "",
      imageHeight: 1024,
      imageWidth: 768,
      inferenceSteps: 15,
      seed: 985415680,
      public: false,
      scheduler: "EULER_DISCRETE",
      sdVersion: "SDXL_LIGHTNING",
      status: "COMPLETE",
      presetStyle: "DYNAMIC",
      guidanceScale: 7,
      userId: user.id
    },
    {
      id: "69d03a57-a7c6-4e56-bc3c-92fdb0a93f71",
      createdAt: new Date("2024-05-08T13:11:03.352"),
      generated_images: [
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/69d03a57-a7c6-4e56-bc3c-92fdb0a93f71/Default_A_sleek_and_intricate_silicon_sentinel_stands_guard_it_0.jpg",
          nsfw: true,
          id: "a6dad484-b348-419f-9f21-529d0afd8067",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/69d03a57-a7c6-4e56-bc3c-92fdb0a93f71/Default_A_sleek_and_intricate_silicon_sentinel_stands_guard_it_1.jpg",
          nsfw: false,
          id: "6c86f679-d9c4-46df-8b5c-3cab6906f1e7",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/69d03a57-a7c6-4e56-bc3c-92fdb0a93f71/Default_A_sleek_and_intricate_silicon_sentinel_stands_guard_it_2.jpg",
          nsfw: false,
          id: "c1ee3b5d-af66-4a7f-8b65-456e44137a0d",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        },
        {
          url: "https://cdn.leonardo.ai/users/4cf1507b-af9b-476f-8640-4454bd8ef91b/generations/69d03a57-a7c6-4e56-bc3c-92fdb0a93f71/Default_A_sleek_and_intricate_silicon_sentinel_stands_guard_it_3.jpg",
          nsfw: false,
          id: "b6677b66-8516-4b6e-8627-d3ae79036104",
          likeCount: 0,
          motionMP4URL: null,
          generated_image_variation_generics: []
        }
      ],
      modelId: "b24e16ff-06e3-43eb-8d33-4416c2d75876",
      prompt: "A sleek and intricate silicon sentinel stands guard, its surface adorned with delicate etchings and intricate patterns. This enigmatic figure, resembling a cyborg from a distant future, gazes solemnly into the unknown. The image is a striking high fashion photograph, showcasing the sentinel in exquisite detail against a dramatic backdrop. The composition is flawless, with every line and curve expertly captured in stunning clarity. Its metallic sheen reflects the light in a mesmerizing display of technologically-driven elegance. This captivating depiction exudes a sense of mystery and sophistication, inviting viewers to unravel the secrets of this cryptic entity.",
      negativePrompt: "",
      imageHeight: 1024,
      imageWidth: 768,
      inferenceSteps: null,
      seed: 444446208,
      public: true,
      scheduler: "LEONARDO",
      sdVersion: "SDXL_LIGHTNING",
      status: "COMPLETE",
      presetStyle: "LEONARDO",
      guidanceScale: 7,
      userId: user.id
    }
  ];

  // Create generations
  for (const generation of generations) {
    await prisma.generation.create({
      data: {
        ...generation,
        generated_images: JSON.stringify(generation.generated_images), // Store generated_images as JSON
      },
    });
  }
}

main()
  .then(async () => {
    console.log('Data seeded successfully');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Error seeding data:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
