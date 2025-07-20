import { SyntaxNode } from "tree-sitter";

export interface Visitor {
    visit(node: SyntaxNode): void;
    enterNode?(node: SyntaxNode): boolean;
    exitNode?(node: SyntaxNode): void;
}