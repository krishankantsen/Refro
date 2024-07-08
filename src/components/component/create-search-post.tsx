import { Card } from "@/components/ui/card";
import Link from "next/link";
import CreatePost from "./CreatePost";
import { Button } from "../ui/button";
import { useState } from "react";
import { X } from "lucide-react";
import { SearchPost } from "./search-post";

export function CreateSearchPost() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showSearchPost, setShowSearchPost] = useState(false);

  const toggleCreatePost = () => {
    setShowCreatePost(!showCreatePost);
    if (!showCreatePost) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  };

  return (
    <Card className="w-full p-6">
      <div className="flex flex-col items-start gap-4">
        <div>
          <h3 className="text-2xl font-semibold">Manage Posts</h3>
          <p className="text-muted-foreground">
            Create new posts or search existing ones.
          </p>
        </div>
        <div className="flex w-full gap-4">
          <Button
            className="flex-1 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2"
            onClick={toggleCreatePost}
          >
            Create Post
          </Button>
          <Button
            
            className="flex-1 inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2"
            
          >
            Search Post
          </Button>
        </div>
        {showCreatePost && (
          <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm bg-opacity-50 flex justify-center items-center flex-col gap-4">
           
                <X onClick={toggleCreatePost} className="cursor-pointer" />
              
              <CreatePost />
            
          </div>
        )}
        
      </div>
    </Card>
  );
}
