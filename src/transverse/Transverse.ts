import { SyntaxNode } from "tree-sitter";
import { Visitor } from "../visitor/Visitor";

export default class Transverse {

    postOrder(nodeRoot: SyntaxNode, visitor: Visitor) {

        nodeRoot.children.forEach((node: any) => {
            this.postOrder(node, visitor)
        })

        visitor.visit(nodeRoot);

    }

}