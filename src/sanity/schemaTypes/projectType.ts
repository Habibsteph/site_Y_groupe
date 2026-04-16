import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projet",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
    }),

    defineField({
      name: "summary",
      title: "Résumé court",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "client",
      title: "Client",
      type: "string",
    }),

    defineField({
      name: "year",
      title: "Année",
      type: "number",
    }),

    defineField({
      name: "poles",
      title: "Pôles",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Graphisme", value: "Graphisme" },
          { title: "Production", value: "Production" },
          { title: "Digital", value: "Digital" },
          { title: "Stratégie & Conseil", value: "Stratégie & Conseil" },
        ],
      },
    }),

    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "heroTitle",
      title: "Titre hero",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description complète",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "challenge",
      title: "Challenge",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "result",
      title: "Résultat",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "stats",
      title: "Statistiques",
      type: "array",
      of: [
        defineField({
          name: "stat",
          title: "Stat",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "value",
              title: "Valeur",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          },
        }),
      ],
    }),

    defineField({
      name: "coverImage",
      title: "Image de couverture",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texte alternatif",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "gallery",
      title: "Galerie",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Texte alternatif",
              type: "string",
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "videos",
      title: "Vidéos du projet",
      type: "array",
      of: [
        defineField({
          name: "videoItem",
          title: "Vidéo",
          type: "object",
          fields: [
            defineField({
              name: "source",
              title: "Source vidéo",
              type: "string",
              options: {
                list: [
                  { title: "Upload Sanity", value: "upload" },
                  { title: "Lien YouTube / Vimeo", value: "embed" },
                ],
                layout: "radio",
              },
              initialValue: "upload",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "format",
              title: "Format vidéo",
              type: "string",
              options: {
                list: [
                  { title: "Paysage", value: "landscape" },
                  { title: "Vertical", value: "portrait" },
                ],
                layout: "radio",
              },
              initialValue: "landscape",
            }),

            defineField({
              name: "file",
              title: "Fichier vidéo",
              type: "file",
              options: {
                accept: "video/*",
              },
              hidden: ({ parent }) => parent?.source !== "upload",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const parent = context.parent as { source?: string };
                  if (parent?.source === "upload" && !value) {
                    return "Ajoute un fichier vidéo.";
                  }
                  return true;
                }),
            }),

            defineField({
              name: "url",
              title: "Lien vidéo",
              type: "url",
              description: "Lien YouTube ou Vimeo",
              hidden: ({ parent }) => parent?.source !== "embed",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const parent = context.parent as { source?: string };

                  if (parent?.source !== "embed") return true;
                  if (!value) return "Ajoute un lien vidéo.";

                  const isValid = /youtube\.com|youtu\.be|vimeo\.com/.test(
                    value
                  );

                  return isValid || "Utilise un lien YouTube ou Vimeo valide.";
                }),
            }),

            defineField({
              name: "poster",
              title: "Image poster",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  title: "Texte alternatif",
                  type: "string",
                }),
              ],
            }),

            defineField({
              name: "caption",
              title: "Légende vidéo",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "caption",
              subtitle: "source",
              media: "poster",
            },
            prepare(selection) {
              return {
                title: selection.title || "Vidéo sans légende",
                subtitle:
                  selection.subtitle === "embed"
                    ? "Lien YouTube / Vimeo"
                    : "Upload Sanity",
                media: selection.media,
              };
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "client",
    },
  },
});