function compare() {
  const repo_owner = document.getElementById('repo_owner').value.trim();
  const repo_name = document.getElementById('repo_name').value.trim();
  const base_ref = document.getElementById('base_ref').value.trim();
  const head_ref = document.getElementById('head_ref').value.trim();

  if (repo_owner && repo_name && base_ref && head_ref) {
    window.open(`https://github.com/${repo_owner}/${repo_name}/compare/${base_ref}...${head_ref}`, '_blank');
  }
}
