import { publicUrl } from "@/env.mjs";
import { getTranslations } from "@/i18n/server";
import productsJson from "@/lib/data.json";
import { ProductList } from "@/ui/products/product-list";
import ShopTheLook from "@/ui/products/shop-the-look";
import { YnsLink } from "@/ui/yns-link";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	//const products = await Commerce.productBrowse({ first: 6 });
	const products = productsJson;
	const t = await getTranslations("/");

	return (
		<main>
			<section
				className="relative rounded bg-cover bg-center py-8 sm:py-12"
				style={{ backgroundImage: "url('/static/images/hero.webp')" }}
			>
				<div className="absolute inset-0 bg-black/40"></div> {/* Optional overlay */}
				<div className="relative mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
					<div className="max-w-md space-y-4">
						<h2 className="text-balance text-3xl font-bold tracking-tight text-neutral-50 md:text-4xl">
							{t("hero.title")}
						</h2>
						<p className="text-pretty text-neutral-200">{t("hero.description")}</p>
						<YnsLink
							className="inline-flex h-10 items-center justify-center rounded-full bg-neutral-900 px-6 font-medium text-neutral-50 transition-colors hover:bg-neutral-900/90 focus:outline-none focus:ring-1 focus:ring-neutral-950"
							href={t("hero.link")}
						>
							{t("hero.action")}
						</YnsLink>
					</div>
				</div>
			</section>

			<ShopTheLook />

			<ProductList products={products} />

			{/* <section className="w-full py-8">
				<div className="grid gap-8 lg:grid-cols-2">
					{[
						{ categorySlug: "accessories", src: AccessoriesImage },
						{ categorySlug: "apparel", src: ApparelImage },
					].map(({ categorySlug, src }) => (
						<CategoryBox key={categorySlug} categorySlug={categorySlug} src={src} />
					))}
				</div>
			</section> */}
		</main>
	);
}
