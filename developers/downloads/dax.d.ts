/** Dax native accelerator API v1. Runtime supplied by Dax; no DOM or Node. */
type DaxImage = string & { readonly __daxImage: unique symbol };
type DaxState<T> = { get(): T; set(value: T | ((previous: T) => T)): void };
type DaxItem = { id: string; title: string; subtitle?: string };
type DaxAction = () => void | Promise<void>;
type DaxBase = { id?: string; disabled?: boolean };
type DaxNode = DaxBase & { readonly type: string };
type DaxChild = DaxNode | false | null | undefined;
type DaxTextInput = DaxBase & { label?: string; value: string; placeholder?: string; onChange(value: string): void; height?: number };
interface DaxUI {
  mount(render: () => DaxNode): void;
  column(props: DaxBase & { children: DaxChild[] }): DaxNode;
  form(props: DaxBase & { children: DaxChild[] }): DaxNode;
  row(props: DaxBase & { children: DaxChild[] }): DaxNode;
  text(props: DaxBase & { text: string }): DaxNode;
  textField(props: DaxTextInput): DaxNode;
  textArea(props: DaxTextInput): DaxNode;
  button(props: DaxBase & { title: string; onPress: DaxAction }): DaxNode;
  toggle(props: DaxBase & { label: string; value: boolean; onChange(value: boolean): void }): DaxNode;
  picker(props: DaxBase & { label?: string; value: string; options: DaxItem[]; onChange(value: string): void }): DaxNode;
  list(props: DaxBase & { items: DaxItem[]; value?: string; onSelect(id: string): void }): DaxNode;
  code(props: DaxBase & { text: string; height?: number }): DaxNode;
  /** Inline Markdown (bold, links, code). Not a full document renderer. */
  markdown(props: DaxBase & { text: string }): DaxNode;
  image(props: DaxBase & { image: DaxImage; label?: string; height?: number }): DaxNode;
  progress(props: DaxBase & { title?: string }): DaxNode;
  emptyState(props: DaxBase & { title?: string; text?: string }): DaxNode;
  toast(options: { title: string }): Promise<void>;
  close(): Promise<void>;
}
declare const dax: {
  defineAccelerator(definition: { activate(context: { apiVersion: 1; input: { text?: string } }): void | Promise<void> }): void;
  state<T>(initial: T): DaxState<T>;
  ui: DaxUI;
  clipboard: {
    readText(): Promise<string>; writeText(text: string): Promise<void>;
    readImage(): Promise<DaxImage>; writeImage(image: DaxImage): Promise<void>;
  };
  capture: { snip(): Promise<DaxImage> };
  images: {
    recognizeText(image: DaxImage): Promise<string>;
    removeBackground(image: DaxImage): Promise<DaxImage>;
    annotate(image: DaxImage): Promise<DaxImage>;
    release(image: DaxImage): Promise<void>;
  };
  ai: {
    models(): Promise<{ text: { id: 'default'; name: string; supportsVision: boolean }[]; image: { id: string; name: string; slug: string }[] }>;
    transform(options: { text: string; instruction: string }): Promise<string>;
    ask(options: { question: string; model?: 'default'; images?: DaxImage[]; search?: 'off' | 'search' | 'research' }): Promise<{ text: string; sources: { title: string; url: string }[] }>;
    generateImage(options: { prompt: string; model?: string; images?: DaxImage[]; aspectRatio?: 'auto' | '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | '4:5' | '5:4'; background?: 'auto' | 'transparent' | 'opaque' }): Promise<{ image: DaxImage; model: string; cost: number | null }>;
  };
  files: { pickImage(): Promise<DaxImage>; saveImage(image: DaxImage): Promise<void> };
  /** JSON-serializable data, isolated by accelerator ID. Local to this Mac. */
  storage: { get<T = unknown>(key: string): Promise<T | null>; set(key: string, value: unknown): Promise<void> };
  upload: { image(image: DaxImage): Promise<string> };
};
