json.records do
  json.array!(@posts) do |post|
    json.extract!(post, :title, :to_param, :user, :id)
    json.created_at post.created_at.strftime('%B %e, %Y at %l:%m%p')
    json.edit_path edit_post_path(post)
    if post.published?
      json.view_link action_link('View on Site', post_path(post), 'laptop')
    end
    json.categories post.post_categories.map{ |c| c.title }.join(', ')
    json.edit_link edit_link(post)
    json.delete_link delete_link(post)
  end
end

json.pagination do
  json.currentPage @posts.current_page
  json.totalPages @posts.total_pages
  json.totalEntries @posts.total_entries
end
